import './sideMenu.css';
import logo from '../../images/Skilla-logo.svg';
import addIcon from '../../images/icons-side-menu/add-icon.svg';
import warnIcon from '../../images/icons-side-menu/alert_24.svg';

function SideMenu() {
  return (
    <aside className="side-menu">
      <img src={logo} className="side-menu__logo" alt="Логотип Skilla IS" />
      <nav className="side-menu__nav">
        <ul className="side-menu__nav-list">
          <li className="side-menu__nav-list-item" id="results">
            Итоги
          </li>
          <li className="side-menu__nav-list-item" id="orders">
            Заказы
          </li>
          <li className="side-menu__nav-list-item" id="messages">
            Сообщения
          </li>
          <li
            className="side-menu__nav-list-item side-menu__nav-list-item_active"
            id="calls"
          >
            Звонки
          </li>
          <li className="side-menu__nav-list-item" id="agents">
            Контрагенты
          </li>
          <li className="side-menu__nav-list-item" id="docs">
            Документы
          </li>
          <li className="side-menu__nav-list-item" id="operators">
            Исполнители
          </li>
          <li className="side-menu__nav-list-item" id="reports">
            Отчеты
          </li>
          <li className="side-menu__nav-list-item" id="knowledge">
            База знаний
          </li>
          <li className="side-menu__nav-list-item" id="settings">
            Настройки
          </li>
        </ul>
        <button className="side-menu__button">
          Добавить заказ{' '}
          <img
            src={addIcon}
            alt="Логотип добавить"
            className="side-menu__button-logo"
          />
        </button>
        <button className="side-menu__button side-menu__button_pay">
          Оплата
          <img
            src={warnIcon}
            alt="Логотип предупреждение"
            className="side-menu__button-logo"
          />
        </button>
      </nav>
    </aside>
  );
}

export default SideMenu;
