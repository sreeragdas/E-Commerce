export const CreateUser: React.FC = () => {
    return(<div>
        <form>
            <div>
                <div>Name</div>
                <input  type="text" />
                <div>Username</div>
                <input  type="text" />
                <div>Password</div>
                <input  type="text" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>);
}