import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeReport } from '../store/reportReducer';

const ReportIndexItem = ({ report }) => {
  const dispatch = useDispatch();

  const deleteReport = (e) => {
    e.preventDefault();
    dispatch(removeReport(report.id))
  };
  const state = useSelector(state => state.reports)


  return (
    <li>
      <Link to={`/reports/${report.id}`}>Report #{report.id}</Link>
      <Link to={`/reports/${report.id}/edit`}>Edit</Link>
      <button onClick={deleteReport}>Delete</button>
    </li>
  );
};

export default ReportIndexItem;
