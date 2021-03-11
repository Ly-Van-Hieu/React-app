import React, {useState} from 'react'

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    avatar:'',
    phone: '',
    age: 20,
    gender: 'male',
    hobbies: [1,3],
    note: ''

  })
  const [hobbies] = useState([
    {id: 1, name: 'Football'},
    {id: 2, name: 'Reading'},
    {id: 3, name: 'Swimming'},
    {id: 4, name: 'Running'}
  ])
  
  const onChange = event => {
    const {name, value, type} = event.target
    let newValue = value
    if (name === 'age') newValue = Number(value)
    if (type === 'checkbox') {
      if (form.hobbies.includes(Number(value))) {
        newValue = form.hobbies.filter(item => item !== Number(value))
      }else {
        newValue = [...form.hobbies, Number(value)]
      }
    }
    setForm({
      ...form,
      [name]: newValue
    })
  }
  return (
    <>  
      <h1>My form</h1>
      <table>
        <thead>
          <tr>
            <th>Nội dung</th>
            <th>Giá Trị</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Họ Tên:</td>
            <td><input type="text" name="name" value={form.name} onChange={onChange} /></td>
          </tr>

          <tr>
            <td>Email:</td>
            <td><input type="email" name="email" value={form.email} onChange={onChange} /></td>
          </tr>

          <tr>
            <td>Mật Khẩu:</td>
            <td><input type="password" name="password" value={form.password} onChange={onChange} /></td>
          </tr>

          <tr>
            <td>Avatar:</td>
            <td><input type="file" name="avatar" value={form.avatar} onChange={onChange} /></td>
          </tr>

          <tr>
            <td>Số điện thoại:</td>
            <td><input type="tel" name="phone" value={form.phone} onChange={onChange} /></td>
          </tr>

          <tr>
            <td>Tuổi:</td>
            <td>
              <select value={form.age} onChange={onChange} name="age">
                <option value={10}>dưới 10 tuổi</option>
                <option value={20}>dưới 20 tuổi</option>
                <option value={30}>dưới 30 tuổi</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>Giới Tính:</td>
            <td>
              <label>
                <input type="radio" name="gender" value="male" checked={form.gender === 'male'} onChange={onChange} />Nam 
              </label>
              <label>
                <input type="radio" name="gender" value="female" checked={form.gender === 'female'} onChange={onChange} />Nữ
              </label>
            </td>
          </tr>

          <tr>
            <td>Sở thích:</td>
            <td>
              {hobbies.map(item => (
                <label key={item.id}>
                  <input type="checkbox" name="hobbies" value={item.id} defaultChecked={form.hobbies.includes(item.id)} onChange={onChange} />{item.name}
                </label>
              ))}
            </td>
          </tr>

          <tr>
            <td>Chú thích:</td>
            <td>
              <textarea name="note" value={form.note} onChange={onChange} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Form
