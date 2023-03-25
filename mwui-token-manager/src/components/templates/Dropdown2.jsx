const DropDownLevel = () => {
}

const DropDownTwo = () => {
    // dropdown-container geht um ganzes dropdown
    return <div className="dropdown-container">
        {/* nächste Ebene */}
        <DropDownLevel />
    </div>
};

export default DropDownTwo;