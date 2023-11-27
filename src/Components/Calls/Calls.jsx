import SideMenu from '../SideMenu/SideMenu';
import './calls.css';
import { getFormatDateForHeader } from '../../utils/utils';

function Calls() {
  return (
    <main className="calls">
      <SideMenu />
      <header className="calls-header">
        <div className="calls-header__info-container">
          <div className="calls-header__date">
            {getFormatDateForHeader(new Date())}
          </div>
          <div className="calls-header__calls-info">
            <div className="calls-header__calls-info-item">
              <p className="calls-header__calls-info-item-text">
                Новые звонки{' '}
                <span
                  className="calls-header__calls-info-item-text"
                  data-color="green"
                >
                  20 из 30 шт
                </span>
              </p>
              <div className="calls-header__calls-info-item-scale">
                <hr data-color="green" /> <hr data-color="green-end" />
              </div>
            </div>
            <div className="calls-header__calls-info-item">
              <p className="calls-header__calls-info-item-text">
                Качество разговоров{' '}
                <span
                  className="calls-header__calls-info-item-text"
                  data-color="yellow"
                >
                  40%
                </span>
              </p>
              <div className="calls-header__calls-info-item-scale">
                <hr data-color="yellow" /> <hr data-color="yellow-end" />
              </div>
            </div>
            <div className="calls-header__calls-info-item">
              <p className="calls-header__calls-info-item-text">
                Конверсия в заказ{' '}
                <span
                  className="calls-header__calls-info-item-text"
                  data-color="red"
                >
                  67%
                </span>
              </p>
              <div className="calls-header__calls-info-item-scale">
                <hr data-color="red" /> <hr data-color="red-end" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}

export default Calls;
