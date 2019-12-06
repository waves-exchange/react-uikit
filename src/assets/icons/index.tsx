import { check } from './check';

export type IconNames = 'check';

interface IIcon {
    path: JSX.Element;
    viewBox?: string;
}

type Icons = {
    [key in IconNames]: IIcon;
};

export const icons: Icons = {
    check
};