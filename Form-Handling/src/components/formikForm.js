import { useFormik } from "formik";

const validate = values => {
    const errors = {};
    if (!values.username) errors.username = "Name is required";
    if (!values.email) errors.email = "Email is required";
    if (!values.password) errors.password = "Password is needed"
    return errors;
};

const FormikRegistration = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        }, validate,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input 
                name="username"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Username"    
            />
            {formik.errors.username && formik.touched.username && ( <div style={{ color: "red" }}>{formik.errors.username}</div>)}
            <input 
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Email"
            />
            {formik.errors.email && formik.touched.email && ( <div style={{ color: "red" }}>{formik.errors.email}</div>)}
            <input 
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Password"
            />
            {formik.errors.password && formik.touched.password && ( <div style={{ color: "red" }}>{formik.errors.password}</div>)}
            <button type="submit" className="rounded bg-blue-500">Register</button>
        </form>
    );
};

export default FormikRegistration;