import React from "react";
import {FormattedDate} from 'react-intl';
import { useTranslation } from "react-i18next"; 

const Job = (props) => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage || i18n.language;

  const formattedSalary = `${new Intl.NumberFormat(currentLanguage, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(props.offer.salary)} ${
    i18n.language === "es" ? (props.offer.salary > 1 ? "millones" : "millón") : "million"
  }`;


  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{formattedSalary}</td>
      <td>{props.offer.city}</td>
      <td>
          <FormattedDate
            value={new Date(props.offer.date)}
            year='numeric'
            month='long'
            day='numeric'
            weekday='long'
          />
      </td>
      <td>{ new Intl.NumberFormat(navigator.language).format(props.offer.views)}</td>
    </tr>
  );
};

export default Job;
