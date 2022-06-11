import {createAction} from '@reduxjs/toolkit';
import {withPayloadType} from 'typescript/types/PayloadType';

import {appNamespace} from './appSlice';

const getUserByIdACS = createAction(`${appNamespace}/getUserByIdACS`, withPayloadType<number>());

export {getUserByIdACS};
