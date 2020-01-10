class User < ApplicationRecord
    attr_reader :password
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    after_initialize :ensure_session_token

    has_many :portfolios, dependent: :destroy
    has_many :transactions, dependent: :destroy

    def self.find_by_credentials(email, password)
        # user = User.find_by(username: username)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def ensure_session_token
        self.session_token = SecureRandom::urlsafe_base64
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        update!(session_token: SecureRandom::urlsafe_base64)
        session_token
    end
end
