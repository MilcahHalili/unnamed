const Login = () => {
  return (
    <section>
      <form>
        <input type="email" name="username" placeholder="USERNAME" />
        <br/><br/>
        <input type="password" name="password" placeholder="PASSWORD" />
        <br/><br/>
        <input className="submit" type="submit" value="LOG IN" />
      </form>
    </section>
  )
}

export default Login