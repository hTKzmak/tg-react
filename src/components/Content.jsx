import style from './Content.module.scss'
import Card from './Card';

function Content({ wallet, setWallet, showCards, setShowCards }) {

    function addCoins() {
        setWallet(wallet + 1000)
    }

    function resetCoins() {
        setWallet(wallet = 0)
    }

    function random() {
        const functions = [addCoins, resetCoins];
        const randomIndex = Math.floor(Math.random() * functions.length);
        functions[randomIndex]();
      }

    let data = [
        { id: 1, title: 'add coins', func: addCoins },
        { id: 2, title: 'reset coins', func: resetCoins },
        { id: 3, title: 'random', func: random },
    ]

    return (
        <div className="">
            {showCards &&
                <div className={style.content}>
                    <button onClick={() => setShowCards(false)}>{'<'}</button>
                    <div className={style.cardsList}>
                        {data.map(elem => {
                            return <Card title={elem.title} id={elem.id} func={elem.func} />
                        })}
                    </div>
                </div>
            }
        </div>
    )
}

export default Content