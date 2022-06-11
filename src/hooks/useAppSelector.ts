import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from 'typescript/types/RootState';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
