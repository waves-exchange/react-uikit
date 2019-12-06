import * as s from '@emotion/styled';
import { CreateStyled } from '@emotion/styled';
import { defaultTheme } from './themes/default';


export const styled: CreateStyled<typeof defaultTheme> = s.default as unknown as CreateStyled<typeof defaultTheme>;
