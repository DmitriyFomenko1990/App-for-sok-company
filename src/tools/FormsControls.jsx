import style from './FormsControls.module.css'

export const Input = ({input, meta, placeholder, type,  meta: { touched, error, warning }}) =>{
    return <div className={style.wrapper}>
        <input {...input}
               type={type}
               placeholder={placeholder}
               className={touched && input.values && style.inputErr} />
        <div>{touched &&
        ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}</div>
    </div>
};
