import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'AiCRM'}
      subTitle={translate('Do you need help on customize of this app')}
      extra={
        <>
          <p>
            Website : <a href="https://www.idurarapp.com">https://iranexpedia.ir</a>{' '}
          </p>
          
          <Button
            type="primary"
            onClick={() => {
              window.open(`tel:+989120674032`);
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
