import React from 'react'
import Field from './field'
import SecureField from './secure'

const Card = ({ entry, validate, onChange }) => {
  return (
    <>
      <Field
        name="Title"
        validate={validate}
        entry={entry}
        onChange={onChange}
      />
      <Field
        name="Number"
        validate={validate}
        entry={entry}
        onChange={onChange}
      />
      <Field
        name="Month"
        validate={validate}
        entry={entry}
        onChange={onChange}
      />
      <Field
        name="Year"
        validate={validate}
        entry={entry}
        onChange={onChange}
      />
      <Field name="CVC" validate={validate} entry={entry} onChange={onChange} />
      <SecureField
        name="Pin"
        validate={validate}
        entry={entry}
        onChange={onChange}
      />
      <Field name="Name" entry={entry} onChange={onChange} />
    </>
  )
}

export default Card