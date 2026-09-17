import { LuShield } from "react-icons/lu";
import { PiStackBold } from "react-icons/pi";
import { TbTopologyStar3 } from "react-icons/tb";

const AuthBrandPanel = () => {
  return (
    <aside>
      <div>
        <span>C</span>
        <h4>Clarity</h4>
      </div>
      <div>
        <div>
          <h1>
            <span>Capture thoughts.</span>
            <span>Design your mind.</span>
          </h1>
          <p>
            A minimalist workspace that brings structure to your ideas without
            getting in the way.
          </p>
        </div>
        <ul>
          <li>
            <div>
              <TbTopologyStar3 />
            </div>
            <div>
              <h3>Frictionless capture</h3>
              <p>Jot down notes instantly before the thought fades.</p>
            </div>
          </li>
          <li>
            <div>
              <PiStackBold />
            </div>
            <div>
              <h3>Organized by priority</h3>
              <p>Keep what's important right at the top of your mind.</p>
            </div>
          </li>
          <li>
            <div>
              <LuShield />
            </div>
            <div>
              <h3>Private by default</h3>
              <p>Your data lives locally. You are the only owner.</p>
            </div>
          </li>
        </ul>
      </div>
      <p>&copy Clarity App. Designed for focus. By StingRey.</p>
    </aside>
  );
};

export default AuthBrandPanel;
