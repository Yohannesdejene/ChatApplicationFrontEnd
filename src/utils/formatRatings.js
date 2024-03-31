export default function formatRatings(rate_value) {
    try {
        let res = [];
        const rate = parseFloat(rate_value);
        const max_rates = 5;
        const rate_loops = parseInt(rate_value) - 1;
        const remaining_loops = max_rates - parseInt(rate_value);
        const decimal_part = (rate % 1).toFixed(1);
        for (let i = 1; i <= parseInt(rate_loops); i++) {
            res.push(<i className="star-rating-icon product-rating ci-star-filled active" key={i}></i>);
        };
        if (parseFloat(decimal_part) < 0.5) {
            res.push(<i className="star-rating-icon product-ratingci-star-half active" key={decimal_part + 1}></i>);
        };
        for (let i = 1; i <= parseInt(remaining_loops); i++) {
            res.push(<i className="star-rating-icon product-rating ci-star" key={i}></i>);
        };
        return res;
    } catch (error) {
        return [];
    }

};