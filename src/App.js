import './App.css';
import { useState } from "react";

export default function SweepNotes() {
  const [LpFloor1StudyRoom, setLpFloor1StudyRoom] = useState('');
  const [LpFloor1Kitchen, setLpFloor1Kitchen] = useState('');
  const [LpFloor2StudyRoom, setLpFloor2StudyRoom] = useState('');
  const [LpFloor2Kitchen, setLpFloor2Kitchen] = useState('');
  const [LpFloor3StudyRoom, setLpFloor3StudyRoom] = useState('');
  const [LpFloor3Kitchen, setLpFloor3Kitchen] = useState('');
  const [LpFloor4StudyRoom, setLpFloor4StudyRoom] = useState('');
  const [LpFloor4Kitchen, setLpFloor4Kitchen] = useState('');
  const [LpFloor5StudyRoom, setLpFloor5StudyRoom] = useState('');
  const [LpFloor5Kitchen, setLpFloor5Kitchen] = useState('');
  const [LpFloor6StudyRoom, setLpFloor6StudyRoom] = useState('');
  const [LpFloor6Kitchen, setLpFloor6Kitchen] = useState('');

  const [Wsfloor1, setWsfloor1] = useState('');
  const [Wsfloor2, setWsfloor2] = useState('');
  const [Wsfloor3, setWsfloor3] = useState('');
  const [Wsfloor4, setWsfloor4] = useState('');
  const [Wsfloor5, setWsfloor5] = useState('');
  const [Wsfloor6, setWsfloor6] = useState('');
  const [WsStudyRoom, setWsStudyRoom] = useState('');
  const [WsLaundry, setWsLaundry] = useState('');

  const [LpCommonRoom, setLpCommonRoom] = useState('');
  const [LpLaundry, setLpLaundry] = useState('');
  const [WsNotes, setWsNotes] = useState('');
  const [LpNotes, setLpNotes] = useState('');

  const handleCopy = () => {
    const sweepNotes = `
      Les Prince: \n
      ${LpFloor1StudyRoom && `Floor 1: ${LpFloor1StudyRoom} students in study room, ${LpFloor1Kitchen} students in kitchen\n`}
      ${LpFloor2StudyRoom && `Floor 2: ${LpFloor2StudyRoom} students in study room, ${LpFloor2Kitchen} students in kitchen\n`}
      ${LpFloor3StudyRoom && `Floor 3: ${LpFloor3StudyRoom} students in study room, ${LpFloor3Kitchen} students in kitchen\n`}
      ${LpFloor4StudyRoom && `Floor 4: ${LpFloor4StudyRoom} students in study room, ${LpFloor4Kitchen} students in kitchen\n`}
      ${LpFloor5StudyRoom && `Floor 5: ${LpFloor5StudyRoom} students in study room, ${LpFloor5Kitchen} students in kitchen\n`}
      ${LpFloor6StudyRoom && `Floor 6: ${LpFloor6StudyRoom} students in study room, ${LpFloor6Kitchen} students in kitchen\n`}
      ${LpCommonRoom && `LP Common Spaces: ${LpCommonRoom} students in Common Room, ${LpLaundry} students in Laundry\n`}
      ${LpNotes && `Lp Additional Notes: ${LpNotes}\n`}
      
      Woodstock: \n
      ${Wsfloor1 && `Floor 1: ${Wsfloor1} students in common room\n`}
      ${Wsfloor2 && `Floor 2: ${Wsfloor2} students in common room\n`}
      ${Wsfloor3 && `Floor 3: ${Wsfloor3} students in common room\n`}
      ${Wsfloor4 && `Floor 4: ${Wsfloor4} students in common room\n`}
      ${Wsfloor5 && `Floor 5: ${Wsfloor5} students in common room\n`}
      ${Wsfloor6 && `Floor 6: ${Wsfloor6} students in common room\n`}
      ${WsStudyRoom && `WS Basement: ${WsStudyRoom} students in Study Room, ${WsLaundry} students in Laundry\n`}
      ${WsNotes && `WS Additional Notes: ${WsNotes}\n`}
    `;
    
    navigator.clipboard.writeText(sweepNotes.trim()).then(() => {
      alert("Sweep notes copied to clipboard!");
    });
  };
  

  return (
    <div className="sweep-notes">
      <div className="input-cards">
      <h1>Princestock Sweep Notes</h1>
        <div className="card">
          <h1>Les Prince</h1>
          <div className="floor">
            <strong>Floor 1 </strong>
            <input 
              type="number" 
              value={LpFloor1StudyRoom} 
              onChange={(e) => setLpFloor1StudyRoom(e.target.value)} 
              placeholder="Study Room"
            />
            <input 
              type="number" 
              value={LpFloor1Kitchen} 
              onChange={(e) => setLpFloor1Kitchen(e.target.value)} 
              placeholder="Kitchen"
            />
          </div>
          <div className="floor">
            <strong>Floor 2 </strong>
            <input 
              type="number" 
              value={LpFloor2StudyRoom} 
              onChange={(e) => setLpFloor2StudyRoom(e.target.value)} 
              placeholder="Study Room"
            />
            <input 
              type="number" 
              value={LpFloor2Kitchen} 
              onChange={(e) => setLpFloor2Kitchen(e.target.value)} 
              placeholder="Kitchen"
            />
          </div>
          <div className="floor">
            <strong>Floor 3 </strong>
            <input 
              type="number" 
              value={LpFloor3StudyRoom} 
              onChange={(e) => setLpFloor3StudyRoom(e.target.value)} 
              placeholder="Study Room"
            />
            <input 
              type="number" 
              value={LpFloor3Kitchen} 
              onChange={(e) => setLpFloor3Kitchen(e.target.value)} 
              placeholder="Kitchen"
            />
          </div>
          <div className="floor">
            <strong>Floor 4 </strong>
            <input 
              type="number" 
              value={LpFloor4StudyRoom} 
              onChange={(e) => setLpFloor4StudyRoom(e.target.value)} 
              placeholder="Study Room"
            />
            <input 
              type="number" 
              value={LpFloor4Kitchen} 
              onChange={(e) => setLpFloor4Kitchen(e.target.value)} 
              placeholder="Kitchen"
            />
          </div>
          <div className="floor">
            <strong>Floor 5 </strong>
            <input 
              type="number" 
              value={LpFloor5StudyRoom} 
              onChange={(e) => setLpFloor5StudyRoom(e.target.value)} 
              placeholder="Study Room"
            />
            <input 
              type="number" 
              value={LpFloor5Kitchen} 
              onChange={(e) => setLpFloor5Kitchen(e.target.value)} 
              placeholder="Kitchen"
            />
          </div>
          <div className="floor">
            <strong>Floor 6 </strong>
            <input 
              type="number" 
              value={LpFloor6StudyRoom} 
              onChange={(e) => setLpFloor6StudyRoom(e.target.value)} 
              placeholder="Study Room"
            />
            <input 
              type="number" 
              value={LpFloor6Kitchen} 
              onChange={(e) => setLpFloor6Kitchen(e.target.value)} 
              placeholder="Kitchen"
            />
          </div>
          <div className="floor">
            <strong>Common Room </strong>
            <input 
              type="number" 
              value={LpCommonRoom} 
              onChange={(e) => setLpCommonRoom(e.target.value)} 
              placeholder="Common Room"
            />
          </div>
          <div className="floor">
            <strong>Laundry </strong>
            <input 
              type="number" 
              value={LpLaundry} 
              onChange={(e) => setLpLaundry(e.target.value)} 
              placeholder="Laundry"
            />
          </div>
          <div className="notes">
            <label>Additional Notes </label>
            <textarea 
              value={LpNotes} 
              onChange={(e) => setLpNotes(e.target.value)} 
              placeholder="Details about Noise Complaints, Incident Reports, Service Requests, etc." 
            />
          </div>
        </div>

        <div className="card">
          <h1>WoodStock</h1>
          <div className="floor">
            <strong>Floor 1 </strong>
            <input 
              type="number" 
              value={Wsfloor1} 
              onChange={(e) => setWsfloor1(e.target.value)} 
              placeholder="Common Room"
            />
          </div>
          <div className="floor">
            <strong>Floor 2 </strong>
            <input 
              type="number" 
              value={Wsfloor2} 
              onChange={(e) => setWsfloor2(e.target.value)} 
              placeholder="Common Room"
            />
          </div>
          <div className="floor">
            <strong>Floor 3 </strong>
            <input 
              type="number" 
              value={Wsfloor3} 
              onChange={(e) => setWsfloor3(e.target.value)} 
              placeholder="Common Room"
            />
          </div>
          <div className="floor">
            <strong>Floor 4 </strong>
            <input 
              type="number" 
              value={Wsfloor4} 
              onChange={(e) => setWsfloor4(e.target.value)} 
              placeholder="Common Room"
            />
          </div>
          <div className="floor">
            <strong>Floor 5 </strong>
            <input 
              type="number" 
              value={Wsfloor5} 
              onChange={(e) => setWsfloor5(e.target.value)} 
              placeholder="Common Room"
            />
          </div>
          <div className="floor">
            <strong>Floor 6 </strong>
            <input 
              type="number" 
              value={Wsfloor6} 
              onChange={(e) => setWsfloor6(e.target.value)} 
              placeholder="Common Room"
            />
          </div>
          <div className="floor">
            <strong>Basement: </strong>
            <input 
              type="number" 
              value={WsStudyRoom} 
              onChange={(e) => setWsStudyRoom(e.target.value)} 
              placeholder="Study Room"
            />
            <input 
              type="number" 
              value={WsLaundry} 
              onChange={(e) => setWsLaundry(e.target.value)} 
              placeholder="Laundry"
            />
          </div>
          <div className="notes">
            <label>Additional Notes: </label>
            <textarea 
              value={WsNotes} 
              onChange={(e) => setWsNotes(e.target.value)} 
              placeholder="Details about Noise Complaints, Incident Reports, Service Requests, etc." 
            />
          </div>
        </div>

        <div className="card output-card">
          <button className="copy-button" onClick={handleCopy}>Copy Sweep Notes</button>
          <h1>Sweep Notes</h1>
          <p>Notes will generate once data entered</p>
          {LpFloor1StudyRoom && <p>Floor 1: {LpFloor1StudyRoom} students in study room, {LpFloor1Kitchen} students in kitchen</p>}
          {LpFloor2StudyRoom && <p>Floor 2: {LpFloor2StudyRoom} students in study room, {LpFloor2Kitchen} students in kitchen</p>}
          {LpFloor3StudyRoom && <p>Floor 3: {LpFloor3StudyRoom} students in study room, {LpFloor3Kitchen} students in kitchen</p>}
          {LpFloor4StudyRoom && <p>Floor 4: {LpFloor4StudyRoom} students in study room, {LpFloor4Kitchen} students in kitchen</p>}
          {LpFloor5StudyRoom && <p>Floor 5: {LpFloor5StudyRoom} students in study room, {LpFloor5Kitchen} students in kitchen</p>}
          {LpFloor6StudyRoom && <p>Floor 6: {LpFloor6StudyRoom} students in study room, {LpFloor6Kitchen} students in kitchen</p>}
          {LpCommonRoom && <p>LP Common Spaces: {LpCommonRoom} students in Common Room, {LpLaundry} students in Laundry</p>}
          {LpNotes && <p>LP Additional Notes: {LpNotes}</p>}
          {Wsfloor1 && <p>Floor 1: {Wsfloor1} students in common room</p>}
          {Wsfloor2 && <p>Floor 2: {Wsfloor2} students in common room</p>}
          {Wsfloor3 && <p>Floor 3: {Wsfloor3} students in common room</p>}
          {Wsfloor4 && <p>Floor 4: {Wsfloor4} students in common room</p>}
          {Wsfloor5 && <p>Floor 5: {Wsfloor5} students in common room</p>}
          {Wsfloor6 && <p>Floor 6: {Wsfloor6} students in common room</p>}
          {WsStudyRoom && <p>WS Basement: {WsStudyRoom} students in Study Room, {WsLaundry} students in Laundry</p>}
          {WsNotes && <p>WS Additional Notes: {WsNotes}</p>}
        </div>

      </div>
    </div>
  );
}
