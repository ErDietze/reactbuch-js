import React from "react";

export default function Choicebar({ title, percent, counts }) {

    const [count, setCount] = React.useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return <div className="ChoiceBar" onClick={handleClick}>
        <div className="Progress" style={{ 'width': percent + '%' }}>
            <div className="ChoiceBarTitle">{title}</div>
        </div>
        <div className="ChoiceBarBadge">{count}</div>
    </div>;
}