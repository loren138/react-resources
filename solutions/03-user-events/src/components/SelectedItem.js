function SelectedItem({ image, name }) {
    return (
        <div className='selected-item'>
            <p>{name}</p>
            <img src={image} alt={name} />
        </div>
    )
}

export default SelectedItem;
