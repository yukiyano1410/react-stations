// DO NOT DELETE

import './App.css'
import Description from './Description'
import Header from './Header.jsx'


/**
 * @type {() => JSX.Element}
 */
export const App = () => {

  return (
    <div>
      <header><Header /></header>
      <div>
        <Description />
      </div>

    </div> /**　<img>の部分で初期値を設定したdogUrlの呼び出し　勝ち！ */
    /**　<button>でボタン配置 onClickイベントでsetDogUrlにUrlを配置 */
    /**　setDogUrlによってdogUrlが変更され新しい画像に　大勝利！やったぁ！！ */
  )
}

