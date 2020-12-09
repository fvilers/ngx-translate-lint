import { ErrorTypes } from './enums';
import { IAppConfig } from './interface';

const config: IAppConfig = {
    defaultValues: {
        rules: {
            misprint: ErrorTypes.warning,
            zombieKeys: ErrorTypes.warning,
            keysOnViews: ErrorTypes.error,
            maxWarning: 0,
            misprintCoefficient: 0.9,
            ignoredKeys: [],
            ignoredMisprintKeys: []
        },
        projectPath: './src/app/**/*.{html,ts,resx}',
        languagesPath: './src/assets/i18n/*.json'
    }
};

const defaultConfig: object = {
    "rules": {
        "keysOnViews": "error",
        "zombieKeys": "warning",
        "misprint": "warning",
        "maxWarning": "0",
        "misprintCoefficient": "0.9",
        "ignoredKeys": [],
        "ignoredMisprintKeys": []
    },
    "project": './src/app/**/*.{html,ts,resx}',
    "languages": './src/assets/i18n/*.json',
};

export { config };
