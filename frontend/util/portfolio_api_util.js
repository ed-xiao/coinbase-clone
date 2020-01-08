export const fetchPortfolio = () => (
    $.ajax({
        url: 'api/portfolios'
    })
);