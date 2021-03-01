import {I18nProvider} from '../i18n';

const ProviderWrapper = ({children}) => {
    return (
        <I18nProvider locale='hi'>
            {children}
        </I18nProvider>
    )
}
export default ProviderWrapper;