import DateTimePicker from 'react-widgets/lib/DateTimePicker'

export const validate = values => {
    const errors = {}
    if (!values.first_name) {
      errors.first_name = 'Required'
    } 
    if (!values.last_name) {
      errors.last_name = 'Required'
    }
    if (!values.password) {
      errors.password = 'Required'
    } else if (values.password.length <  8) {
      errors.password = 'Must be 8 characters or more'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    return errors
  }


export const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
         <input {...input} className="input" placeholder={label} type={type} />
        {touched &&
          ((error && <div className='form-error-message'>{error}</div>) ||
            (warning && <div>{warning}</div>))}    
    </div>
  )
  export const checkoutRenderField = ({ input, placeholder, type, className, meta: { touched, error } }) => {
    return ( 
        <div>
          <input {...input} type={type} className={className} placeholder={placeholder}/>
          {touched && error && (
            <p style={{color:"red", fontSize:"10px"}}>{error}</p>
          )}
        </div>
    );
  };

  export const renderInput = ({ input, type, meta, mime }) => {
    return (
      <div>
        <input
          name={input.name}
          type={type}
          accept={mime}
          onChange={(event) => handleChange(event, input)}
        />
      </div>
    );
  };
  
  export const handleChange = (event,input) => {
    event.preventDefault();
    let imageFile = event.target.files[0];
    if (imageFile) {
      const localImageUrl = URL.createObjectURL(imageFile);
      const imageObject = new window.Image();
  
      imageObject.onload = () => {
        imageFile.width = imageObject.naturalWidth;
        imageFile.height = imageObject.naturalHeight;
        input.onChange(imageFile);
        URL.revokeObjectURL(imageFile);
      };
      imageObject.src = localImageUrl;
    }
  };
  
   export const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
   <DateTimePicker
     onChange={onChange}
     format="YYYY-MM-DD"
     time={false}
     value={!value ? null : new Date(value)}
     />
   
     export const validateBilling = (values) => {
      const errors = {};
      if (!values.first_name) {
        errors.first_name = "Required";
      }
      if (!values.last_name) {
        errors.last_name = 'Required'
      }
      if (!values.street_address) {
        errors.street_address = 'Required'
      }
      if (!values.state_name) {
        errors.state_name = 'Required'
      }
      if (!values.city_name) {
        errors.city_name = 'Required'
      }
      if (!values.store_name) {
        errors.store_name = 'Required'
      }
      if (!values.zip) {
        errors.zip = 'Required'
      }
      if (!values.phone) {
        errors.phone = 'Required'
      }
      return errors;
    };
  export const validateShipping = (values) => {
      const errors = {};
      if (!values.first_name) {
        errors.first_name = "Required";
      }
      if (!values.last_name) {
        errors.last_name = 'Required'
      }
      if (!values.street_address) {
        errors.address = 'Required'
      }
      if (!values.state_name) {
        errors.state_name = 'Required'
      }
      if (!values.city_name) {
        errors.city_name = 'Required'
      }
      return errors;
    };
  

   
                   
               