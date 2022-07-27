import React from 'react'

export default function FriendForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value, checked, type } = evt.target
    //To make the checkbox value go between boolean values - used debugger to figure out to use check
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a Friend</h2>

        {/* 🔥 DISABLE THE BUTTON */}
        <button disabled={disabled}>submit</button>

        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.role}</div>
          <div>{errors.civil}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        <label>Username&nbsp;
          <input
            value={values.username}
            onChange={onChange}
            name='username'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        <label>Role
          <select
            onChange={onChange}
            value={values.role}
            name='role'
          >
            <option value=''>- Select an option -</option>
            <option value='student'>Student</option>
            <option value='alumni'>Alumni</option>
            <option value='instructor'>Instructor</option>
          </select>
        </label>

        {/* ////////// RADIO BUTTONS ////////// */}
        <label>Single
          <input
            type='radio'
            name='civil'
            value='single'
            checked={values.civil === 'single'}
            onChange={onChange}
          />
        </label>

        <label>Married
          <input
            type='radio'
            name='civil'
            value={'married'}
            checked={values.civil === 'married'}
            onChange={onChange} />
        </label>
      </div>

      <div className='form-group checkboxes'>
        <h4>Hobbies</h4>

        {/* ////////// CHECKBOXES ////////// */}
        <label>Hiking
          <input
            type='checkbox'
            name='hiking'
            checked={values.hiking}
            onChange={onChange}

          />
        </label>

        <label>Reading
          <input
            type='checkbox'
            name='reading'
            checked={values.reading}
            onChange={onChange}
          />
        </label>

        <label>Coding
          <input
            type='checkbox'
            name='coding'
            checked={values.coding}
            onChange={onChange}
          />
        </label>
      </div>
    </form>
  )
}
