import { useMemo, useState } from "react";

const R_PERM = 4, W_PERM = 2, X_PERM = 1;

export default function Umask() {
    const [mask, setMask] = useState("022");

    const safeMask = mask.match(/^[0-7]{3}$/);

    return (
        <>
            <label className="custom-input flex flex-wrap items-center gap-3">
                <input
                    type="text"
                    className="border p-3 invalid:border-red-300 invalid:outline-red-800"
                    placeholder="022"
                    pattern="[0-7]{3}"
                    value={mask}
                    onInput={(e) => setMask(e.currentTarget.value)}
                />
                <span className="text-red-400 font-bold transition-all opacity-0 translate-y-2 blur error-message">Invalid mask (use 777)</span>
            </label>

            <br />
            {safeMask && (
                <table className="min-w-full">
                    <thead className="bg-white border-b">
                        <tr>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Type
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Read
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Write
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Execute
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-100 border-b">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                User
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {(7 - +(safeMask[0][0]) & R_PERM)
                                    ? "YES"
                                    : "NO"}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {(7 - +(safeMask[0][0]) & W_PERM)
                                    ? "YES"
                                    : "NO"}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {(7 - +(safeMask[0][0]) & X_PERM)
                                    ? "YES"
                                    : "NO"}
                            </td>
                        </tr>
                        <tr className="bg-gray-100 border-b">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Group
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {(7 - +(safeMask[0][1]) & R_PERM)
                                    ? "YES"
                                    : "NO"}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {(7 - +(safeMask[0][1]) & W_PERM)
                                    ? "YES"
                                    : "NO"}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {(7 - +(safeMask[0][1]) & X_PERM)
                                    ? "YES"
                                    : "NO"}
                            </td>
                        </tr>
                        <tr className="bg-gray-100 border-b">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Other
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {(7 - +(safeMask[0][2]) & R_PERM)
                                    ? "YES"
                                    : "NO"}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {(7 - +(safeMask[0][2]) & W_PERM)
                                    ? "YES"
                                    : "NO"}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {(7 - +(safeMask[0][2]) & X_PERM)
                                    ? "YES"
                                    : "NO"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
        </>
    );
}
