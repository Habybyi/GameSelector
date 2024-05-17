import './content.css';
import { useState, useRef } from 'react';
import { FaSearch } from "react-icons/fa";
import { GrInstallOption } from "react-icons/gr";

const Content = () => {
    let searchRef = useRef(null);
    let [TagPressed, SetTagPressed] = useState(false)
    let [pressed, setpressed] = useState('')
    const basegames = [
        { id: 1, name: "Valorant", tags: ['FPS', 'RANKS'], image: "https://images.hdqwalls.com/download/valorant-2020-5k-game-e9-1600x1200.jpg", installlink: "https://playvalorant.com/en-gb/" },
        { id: 2, name: "CsGo", tags: ['FPS', 'RANKS'], image: "https://www.vgr.com/wp-content/uploads/2021/09/CS-GO.png", installlink: "https://store.steampowered.com/app/730/CounterStrike_2/" },
        { id: 3, name: "Call of Duty", tags: ['FPS', 'RANKS'], image: "https://cdn.wallpapersafari.com/2/28/iptfD4.jpg", installlink: "https://www.callofduty.com/blackops" },
        { id: 4, name: "Minecrat", tags: ['OPENWORLD'], image: "https://images.launchbox-app.com/8e1579bf-6dd3-462d-acd4-127a1248f873.jpg", installlink: "https://www.minecraft.net/en-us/15th-anniversary" },
        { id: 5, name: "Witch It", tags: ['HIDEANDSEAK'], image: "https://cdn-ext.fanatical.com/production/product/1280x720/cb173d49-6cae-4bee-a1b1-0cb3c56ca6a0.jpeg", installlink: "https://store.steampowered.com/app/559650/Witch_It/" },
        { id: 6, name: "Rocket Leaguage", tags: ['CARS', 'RANKS'], image: "https://www.touchtapplay.com/wp-content/uploads/2020/12/Rocket-League.jpg", installlink: "https://store.steampowered.com/app/252950/Rocket_League/" },
        { id: 7, name: "Grant Theft Auto V", tags: ["CARS"], image: "https://www.thelonegamers.com/wp-content/uploads/2013/07/GTAV-Gameplay-1.jpg", installlink: "https://store.steampowered.com/agecheck/app/271590/" },
        { id: 8, name: "Phasmophobia", tags: ["HORROR"], image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.-XLap_vGxsBYGAmgd-iHuwHaEK%26pid%3DApi&f=1&ipt=3ed4d9fc12ddabe8075c45734b62a993caa34375448d5ef66fc00337b2a0507e&ipo=images", installlink: "https://store.steampowered.com/app/739630/Phasmophobia/" },
    ]
    const [games, setGames] = useState(basegames)
    const HerneTagy = ['FPS', 'RANKS', 'CARS', 'HIDEANDSEAK', 'OPENWORLD', 'HORROR']

    const handletag = (tag) => {
        if (TagPressed == false) {
            games.map((game) => (
                game.tags.includes(tag) && (setGames(games.filter(game => game.tags.includes(tag))))
            ))
            SetTagPressed(true)
            setpressed(tag)
        }
        if (TagPressed) {
            SetTagPressed(false)
            setGames(basegames)
            setpressed('')
        }
    }

    const handleRef = () => {
        games.map((game) => (
            game.tags.includes(searchRef.current.value) && (setGames(games.filter(game => game.tags.includes(searchRef.current.value))))

        ))
        games.map((game) => (
            game.name.includes(searchRef.current.value) && (setGames(games.filter(game => game.name.includes(searchRef.current.value))))
        ))

        searchRef.current.value = null

    }
    return (
        <main>
            <h1 className='title'>Výber Hier</h1>
            <div className="input">
                <input type="text" ref={searchRef} className="srchbar" placeholder='Aku hru hladas?' onDoubleClick={handleRef} />
            </div>
            <FaSearch className='searchicon' onClick={handleRef} />
            <p className="tagy">
                {HerneTagy.map((tagy) => (
                    <ul key={tagy} className='tagy' onClick={() => handletag(tagy)} >{tagy}</ul>
                ))}
            </p>
            {pressed && (
                <p className="tagmsg" onClick={handletag}> Searching for "{pressed}" </p>
            )}

            {
                games.map((game) => (
                    <section className="wrapper" key={game.id}>
                        <h3 className='itemtitle'>{game.name}</h3>
                        <img className="image" src={game.image} />
                        <section className="tags">
                            {game.tags.map((tag) => (
                                <ul key={tag} className='tags' onClick={() => handletag(tag)}>{tag}</ul>
                            ))}
                        </section>
                        <a href={game.installlink} target='_blank'>
                            <input type="button" className="install" value="Install" />
                        </a>
                        <GrInstallOption className="installicon" />
                    </section>
                ))
            }
        </main >
    );
}
export default Content
