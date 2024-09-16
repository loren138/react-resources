function Post({ image, name, setSelectedPostName }) {
    return (
        <li className='post-component'>
          <button onClick={() => setSelectedPostName(name)}>
            <img src={image} alt={name}/>
            <p className="post-name">{name}</p>
          </button>
        </li>
    )
}

export default Post;
