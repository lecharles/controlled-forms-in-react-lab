import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = useState({ title: '', author: '' });

    const handleInputChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook]);
        console.log('handleSubmit fired:', newBook);
        setNewBook({ title: '', author: '' });
    };

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                {/* onSubmit on form tag to catch button clicks & Enter key */}
                <form onSubmit={handleSubmit}>
                    {/* htmlFor + id are same to focus input on click  */}
                    <label htmlFor="titleInput">Title:</label>
                    <input
                        type="text"
                        id="titleInput"
                        name="title"
                        value={newBook.title}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="authorInput">Author:</label>
                    <input
                        type="text"
                        id="authorInput"
                        name="author"
                        value={newBook.author}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Add Book</button>
                </form>
            </div>
            {/* Verified console.log key/index mechanics/increments using {} and calling return on div */}
            <div className="bookCardsDiv">
                {books.map((book, index) => (
                    <div className="bookCard" key={index}>
                        <h4>{book.title}</h4>
                        <p>by {book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookshelf;