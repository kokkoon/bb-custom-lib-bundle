import '@fullcalendar/common/main.css';
import dayjs from 'dayjs';
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import * as Grommet from 'grommet';
import * as Core from '@material-ui/core';
import * as Lab from '@material-ui/lab';
import * as Pickers from '@material-ui/pickers';
import * as Styles from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns';
import enLocale from 'date-fns/locale/en-US';
import nlLocale from 'date-fns/locale/nl';
import Icons from './icons';

window.dayjs = dayjs;
window.FullCalendar = FullCalendar;
window.interactionPlugin = interactionPlugin;
window.dayGridPlugin = dayGridPlugin;
window.timeGridPlugin = timeGridPlugin;
window.listPlugin = listPlugin;
window.Grommet = Grommet;

export default {
    Core,
    Icons,
    Lab,
    Pickers,
    Styles,
    DateFnsUtils,
    DateLocales: { enLocale, nlLocale },
  };