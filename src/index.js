import React from "react";
import ReactDOM from "react-dom";

import JobsList from "./components/jobslist";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import "./components/i18n";


ReactDOM.render(
        <IntlProvider locale="es-ES" messages= {localeEsMessages}>
                <JobsList/>
        </IntlProvider>, document.getElementById("root")
);
