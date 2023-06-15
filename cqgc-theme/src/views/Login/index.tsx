// ejected using 'npx eject-keycloak-page'
import { useState } from 'react';
import { MailOutlined, WarningOutlined } from '@ant-design/icons';
import { Alert, Button, Form, Input, Space } from 'antd';
import Link from 'antd/lib/typography/Link';
import Title from 'antd/lib/typography/Title';
import type { I18n } from 'keycloak/i18n';
import type { KcContext } from 'keycloak/KcContext';
import { useGetClassName } from 'keycloakify/login/lib/useGetClassName';
import type { PageProps } from 'keycloakify/login/pages/PageProps';
import { assert } from 'keycloakify/tools/assert';
import SideImageLayout from 'layout/SideImage';

import CQGCLogo from 'assets/CQGCLogo';
import Divider from 'assets/Divider';
import MainSideImage from 'assets/side-img-svg.svg';

import styles from './index.module.scss';

export default function Login(props: PageProps<Extract<KcContext, { pageId: 'login.ftl' }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, classes } = props;

  const { getClassName } = useGetClassName({
    doUseDefaultCss,
    classes,
  });

  const { realm, url, locale, message } = kcContext;

  const { currentLanguageTag, changeLocale, advancedMsg } = i18n;

  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

  const onFinish = () => {
    setIsLoginButtonDisabled(true);

    const formElement = document.getElementById('kc-form-login') as HTMLFormElement;

    formElement.submit();
  };

  return (
    <SideImageLayout sideImgSrc={MainSideImage} className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <div className={styles.switchLang}>
          {realm.internationalizationEnabled &&
            (assert(locale !== undefined), true) &&
            locale.supported.length > 1 && (
              <div id="kc-locale-wrapper" className={getClassName('kcLocaleWrapperClass')}>
                <div className="kc-dropdown" id="kc-locale-dropdown">
                  {locale.supported.map(({ languageTag }) => (
                    <Button
                      id={languageTag}
                      key={languageTag}
                      hidden={languageTag === currentLanguageTag}
                      onClick={() => {
                        changeLocale(languageTag);
                      }}
                      type="primary"
                    >
                      {languageTag.toUpperCase()}
                    </Button>
                  ))}
                </div>
              </div>
            )}
        </div>
        <div className={styles.loginCard}>
          <div className={styles.logoContainer}>
            <CQGCLogo />
            <Divider />
            <Title level={3} className={styles.loginTitle}>
              {advancedMsg('login_title')}
            </Title>
          </div>
          {message !== undefined && message.type === 'error' && (
            <Alert
              message={advancedMsg('login_failed_title')}
              description={advancedMsg('login_failed_message')}
              type={message.type}
              showIcon
              icon={<WarningOutlined />}
            />
          )}
          <Form
            className={styles.loginForm}
            id="kc-form-login"
            name="kc-form-login"
            layout="vertical"
            onFinish={onFinish}
            action={url.loginAction}
            method="post"
          >
            <Form.Item
              label={advancedMsg('username_label')}
              required={true}
              rules={[{ required: true, message: advancedMsg('required_field_error') }]}
            >
              <Input id="username" name="username" tabIndex={1} suffix={<MailOutlined />} />
            </Form.Item>

            <Form.Item
              label={advancedMsg('password_label')}
              required={true}
              rules={[{ required: true, message: advancedMsg('required_field_error') }]}
            >
              <div>
                <Input.Password id="password" name="password" tabIndex={2} />
                <Link>{advancedMsg('forgot_password')}</Link>
              </div>
            </Form.Item>

            <Space size={'middle'}>
              <Button type="primary" htmlType="submit" disabled={isLoginButtonDisabled}>
                {advancedMsg('submit')}
              </Button>
              <Link href={url.registrationUrl}>{advancedMsg('cancel')}</Link>
            </Space>
          </Form>
        </div>
      </div>
    </SideImageLayout>
  );
}
