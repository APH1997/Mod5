import { Link } from 'react-router-dom';
import ReportIndexItem from './ReportIndexItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { resetReports } from '../store/reportReducer';

const ReportIndex = () => {
  const state = useSelector(state => state.reports)
  const reports = Object.values(state);
  const dispatch = useDispatch()
  const resetData = (e) => {
    e.preventDefault();
    dispatch(resetReports());
  };

  return (
    <section>
      <ul>
        {
          reports.map(report => (
            <ReportIndexItem
              report={report}
              key={report.id}
            />
          ))
        }
      </ul>
      <Link to="/reports/new">New Report</Link>
      <button onClick={resetData}>Reset Data</button>
    </section>
  );
}

export default ReportIndex;
