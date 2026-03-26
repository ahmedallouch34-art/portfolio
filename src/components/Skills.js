import React from "react";

function Skills(){
return(

<section id="skills">

<h2>Skills</h2>

<div className="skill">
<p>HTML</p>
<div className="bar"><span style={{width:"90%"}}></span></div>
</div>

<div className="skill">
<p>CSS</p>
<div className="bar"><span style={{width:"80%"}}></span></div>
</div>

<div className="skill">
<p>JavaScript</p>
<div className="bar"><span style={{width:"75%"}}></span></div>
</div>

<div className="skill">
<p>React</p>
<div className="bar"><span style={{width:"70%"}}></span></div>
</div>

</section>

)
}

export default Skills;