package test;

@Table("tb_user")//它的值表示当前类对应的表
public class User {
	@ID("u_id")//当前属性对应的列名，而且说明这个列是主键
	private String uid;
	@Column("uname")
	private String username;
	@Column("pwd")
	private String password;

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
