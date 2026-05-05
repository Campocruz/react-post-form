export default function AppFormBuisness({ onFormatData, user, onHandlerSubmit }) {

  return (
    <>
      <form onSubmit={onHandlerSubmit}>
        <div className="row g-3 row-cols-2">
          <div className="col">
            <input
              name="firstName"
              className="form-control"
              placeholder="Nome"
              type="text"
              value={user.firstName}
              onChange={onFormatData}
            />
          </div>
          <div className="col">
            <input
              name="lastName"
              className="form-control"
              placeholder="Cognome"
              type="text"
              value={user.lastName}
              onChange={onFormatData}
            />
          </div>
          <div className="col">
            <input
              name="companyName"
              className="form-control"
              placeholder="Azienda"
              type="text"
              value={user.companyName}
              onChange={onFormatData}
            />
          </div>
          <div className="col">
            <input
              name="role"
              className="form-control"
              placeholder="Ruolo"
              type="text"
              value={user.role}
              onChange={onFormatData}
            />
          </div>
          <div className="col">
            <input
              name="email"
              className="form-control"
              placeholder="Email"
              type="email"
              value={user.email}
              onChange={onFormatData}
            />
          </div>
          <div className="col">
            <input
              name="phone"
              className="form-control"
              placeholder="Telefono"
              type="tel"
              value={user.phone}
              onChange={onFormatData}
            />
          </div>
        </div>
        <input
          name="companyPic"
          className="form-control mt-3"
          placeholder="Logo Azienda"
          type="url"
          value={user.companyPic}
          onChange={onFormatData}
        />
        <button type="submit" className="btn btn-dark w-100">Add Info</button>
      </form>
    </>
  )
}