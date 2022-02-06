import React from 'react'

export const Checkbox = props => {
    return (
        <tr>
        <td className="checkbox"><input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /></td>
        <td>{props.fileName}</td>
        <td>{props.fileType}</td>
        <td>{props.fileDate}</td>
        <td>{props.fileStatus}</td>
        <td>{props.sessionName}</td>
        <td>{props.sessionCode}</td>
        <td>{props.sessionStatus}</td>
      </tr>
    )
}

export default Checkbox