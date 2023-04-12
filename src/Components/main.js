import react from 'react';

const Main = () => {
    return (

        <div className="nav">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/movies">Movies</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>

            <form>
            <input type="text" placeholder="Search" />
            <button type="submit"><i class="fa-solid fa-magnifying-glass fa-shake"></i></button>
            </form>
        </div>


     
    )
}

export default Main;