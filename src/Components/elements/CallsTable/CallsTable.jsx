import CheckBox from '../CheckBox/CheckBox';
import './callsTable.css';
import { getHoursMins, convertDuration } from '../../../utils/utils';
import failCall from '../../../images/call-fail.svg';
import callSuccess from '../../../images/call.svg';

function CallsTable({ data, loading }) {
  return (
    <table className="calls-table">
      <thead>
        <tr className="calls-table__header-row">
          <th className="calls-table__header-item calls-table__header-item-checkbox">
            <CheckBox />
          </th>
          <th className="calls-table__header-item calls-table__header-item-type">
            Тип
          </th>
          <th className="calls-table__header-item calls-table__header-item-time">
            Время
          </th>
          <th className="calls-table__header-item calls-table__header-item-employee">
            Сотрудник
          </th>
          <th className="calls-table__header-item calls-table__header-item-call">
            Звонок
          </th>
          <th className="calls-table__header-item calls-table__header-item-from">
            Источник
          </th>
          <th className="calls-table__header-item calls-table__header-item-rating">
            Оценка
          </th>
          <th className="calls-table__header-item">Длительность</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr className="calls-table__row">
            <td colSpan="7" style={{ textAlign: 'center', width: '100%' }}>
              Загрузка данных...
            </td>
          </tr>
        ) : (
          data.map((call) => {
            return (
              <tr key={call.id} className="calls-table__row">
                <td className="calls-table__header-item-checkbox">
                  <CheckBox />
                </td>
                <td className="calls-table__header-item-type">
                  {call.status === 'Не дозвонился' ? (
                    <img src={failCall} alt="Не дозвонился" />
                  ) : (
                    <img src={callSuccess} alt="Дозвонился" />
                  )}
                </td>
                <td className="calls-table__header-item-time">
                  {getHoursMins(call.date)}
                </td>
                <td className="calls-table__header-item-employee">
                  <img
                    className="calls-table__header-item-employee-avatar"
                    src={call.person_avatar}
                    alt="аватар"
                  />
                </td>
                <td className="calls-table__header-item-call">
                  {call.from_number}
                </td>
                <td className="calls-table__header-item-from">
                  {call.partner_data.name}
                </td>
                <td className="calls-table__header-item-rating"></td>
                <td>{convertDuration(call.time)}</td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
}

export default CallsTable;
