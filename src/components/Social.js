import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faList,
  faClipboardList,
  faSquarePen,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
export default function Social() {
  return (
    <ul style={{ display: 'flex', flexDirection: 'row' }}>
      <li>Twitter</li>
      <li>
        {/* <FontAwesomeIcon icon={faFacebook} color="blue" /> */}
        Facebook
      </li>
      <li>Linkedin</li>
      <li>Link</li>
      <li>Add into List</li>
      <li>More</li>
    </ul>
  );
}
