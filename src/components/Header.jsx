import {NavLink} from "react-router-dom";

export default function Header(){
    return(
        <>
            <header className="flex bg-blue-700 text-white">
                <div>
                    <h1>Portal Filmes</h1>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/MovieListPage">Filmes</NavLink></li>
                        <li><NavLink to="/MoviesByGenrePage">Gêneros</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}