/* eslint-disable max-len */
import { createUseI18n } from 'keycloakify/login';

export const { useI18n } = createUseI18n({
  // NOTE: Here you can override the default i18n messages
  // or define new ones that, for example, you would have
  // defined in the Keycloak admin UI for UserProfile
  // https://user-images.githubusercontent.com/6702424/182050652-522b6fe6-8ee5-49df-aca3-dba2d33f24a5.png
  en: {
    /* spell-checker: disable */
    login_title: 'Prescriptions and Analyzes',
    username_label: 'Email (.med@ssss.gouv.qc.ca)',
    password_label: 'Password',
    forgot_password: 'Forgot password',
    submit: 'Submit',
    cancel: 'Cancel',
    login_failed_title: 'Login Failed',
    login_failed_message: 'Incorrect username or password. Please try again.',
    required_field_error: 'This field is required',
    email_format_error: 'Email is not in a valid format',
    registration_title: 'Create Your Account',
    title_label: 'Title',
    dr_label: 'Dr.',
    dre_label: 'dre_label',
    firstname_label: 'First name',
    lastname_label: 'Last name',
    license_label: 'Medical license number (5 digits)',
    license_confirm_label: 'Medical license lonfirmation',
    license_format_error: 'Medical license number must consist of 5 digits.',
    license_verification_error: 'Both medical license numbers must be the same',
    institution_label: 'Prescribing institution',
    is_resident_doctor_label: 'I am a resident doctor',
    confirm_password_label: 'Password confirmation',
    password_format_hint: 'Minimum: 8 characters, 1 digit, 1 capital letter, 1 special character',
    password_format_error:
      'Password must be composed of at least 8 characters, 1 capital letter, 1 digit, 1 special character.',
    password_verification_error: 'Password does not match.',
    verify_email_title: 'A Confirmation Email Has Been Sent to You',
    verify_email_message:
      'Click on the link in the email to complete the creation of your user account.',
    error_title: 'An Error Has Occurred',
    error_message: 'Your request has not been submitted.',
    try_again: 'Please try again.',
    error_contact_text: 'For inquiries, please contact:',
    error_contact_name: 'René Allard (HSJ)',
    error_contact_email: 'rene.allard.hsj@ssss.gouv.qc.ca',
    error_contact_phone: '514-345-4931 #6193',
    email_already_exists_title: 'An Account With This Email Address Already Exists',
    email_already_exists_message_1: 'Please',
    email_already_exists_message_2: 'or',
    email_already_exists_login: 'log in',
    email_already_exists_reset_password: 'reset your password',
    email_already_exists_contact_text: 'If you continue to experience issues, please contact us:',
    reset_password_title: 'Forgot Password ?',
    reset_password_text:
      'Enter the email address you use to sign in, and we will send you a link to reset your password.',
    reset_password_confirmation_title: 'Password Reset Email Sent',
    reset_password_confirmation_message_1: 'We have sent you a link to reset your password at:',
    reset_password_confirmation_message_2:
      'If you do not receive email, check your spam folder or contact us at:',
    update_password_title: 'Create a New Password',
    new_password_label: 'New password',
    expiry_error_title: 'Password reset link expired',
    expiry_error_message_1: 'The reset password link has expired.',
    expiry_error_message_2: 'Please submit a',
    expiry_error_try_again: 'new request',
    /* spell-checker: enable */
  },
  fr: {
    /* spell-checker: disable */
    login_title: 'Prescriptions et analyses',
    username_label: 'Courriel (.med@ssss.gouv.qc.ca)',
    password_label: 'Mot de passe',
    forgot_password: 'Mot de passe oublié ?',
    submit: 'Soumettre',
    cancel: 'Annuler',
    login_failed_title: 'Connexion échouée',
    login_failed_message:
      "Il y a une erreur avec votre nom d'utilisateur ou votre mot de passe. Veuillez réessayer.",
    required_field_error: 'Ce champ est obligatoire',
    email_format_error: "L'adresse courriel n'est pas valide",
    registration_title: 'Création de compte',
    title_label: 'Titre',
    dr_label: 'Dr',
    dre_label: 'Dre',
    firstname_label: 'Prénom',
    lastname_label: 'Nom',
    license_label: 'Numéro de permis (5 chiffres)',
    license_confirm_label: 'Confirmation du numéro de permis',
    license_format_error: 'Le numéro de permis doit être composé de 5 chiffres.',
    license_verification_error: 'Les deux numéros de permis doivent être les mêmes',
    institution_label: 'Sélectionnez vos établissements prescripteurs',
    is_resident_doctor_label: 'Je suis un médecin résident',
    confirm_password_label: 'Confirmation du mot de passe',
    password_format_hint: 'Minimum : 8 caractères, 1 majuscule, 1 chiffre, 1 caractère spécial',
    password_format_error:
      'Le mot de passe doit être composé d’au moins 8 caractères, 1 majuscule, 1 chiffre, 1 caractère spécial.',
    password_verification_error: 'Le mot de passe ne correspond pas.',
    verify_email_title: 'Un courriel de confirmation vous a été envoyé',
    verify_email_message:
      'Cliquez sur le lien dans le courriel pour conclure la création de votre compte utilisateur.',
    error_title: 'Une erreur est survenue',
    error_message: "Votre demande n'a pas été envoyée.",
    try_again: 'Veuillez réessayer',
    error_contact_text: 'Pour toute demande, adressez-vous à :',
    error_contact_name: 'René Allard (HSJ)',
    error_contact_email: 'rene.allard.hsj@ssss.gouv.qc.ca',
    error_contact_phone: '514-345-4931 #6193',
    email_already_exists_title: 'Un compte avec cette adresse courriel existe déjà',
    email_already_exists_message_1: 'Veuillez',
    email_already_exists_message_2: 'ou',
    email_already_exists_login: 'vous connecter',
    email_already_exists_reset_password: 'réinitialiser votre mot de passe',
    email_already_exists_contact_text:
      'Si vous continuez à rencontrer des problèmes, veuillez nous contacter :',
    reset_password_title: 'Mot de passe oublié ?',
    reset_password_text:
      "Saisissez l'adresse courriel que vous utilisez pour vous connecter, et nous vous enverrons un lien pour réinitialiser votre mot de passe.",
    reset_password_confirmation_title: 'Courriel de réinitialisation de mot de passe envoyé',
    reset_password_confirmation_message_1:
      'Nous vous avons envoyé un lien pour réinitialiser votre mot de passe à l’adresse :',
    reset_password_confirmation_message_2:
      'Si vous ne recevez pas courriel, vérifiez votre dossier de courrier indésirable ou contactez-nous au :',
    update_password_title: 'Créer un nouveau mot de passe',
    new_password_label: 'Nouveau mot de passe',
    expiry_error_title: 'Lien de réinitialisation expiré',
    expiry_error_message_1: 'Le lien de réinitialisation du mot de passe est expiré.',
    expiry_error_message_2: 'Veuillez effectuer une',
    expiry_error_try_again: 'nouvelle demande',
    /* spell-checker: enable */
  },
});

export type I18n = NonNullable<ReturnType<typeof useI18n>>;
