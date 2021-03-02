import {I18nProvider} from '../i18n';
import {useContext} from 'react';
import {AppContext} from '../Context'
const ProviderWrapper = ({children}) => {
    const {state} = useContext(AppContext);
    return (
        <I18nProvider locale={state.locale}>
            {children}
        </I18nProvider>
    )
}
export default ProviderWrapper;