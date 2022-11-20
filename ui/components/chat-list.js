import React, { useState } from "react";
import ChatListItem from "./chat-list-item";

export default function ChatList() {
    const names = [
        "Benjamin John",
        "George Andrew",
        "Charles Edward",
        "Thomas William",
        "Christopher James",
        "Ryan David",
        "Matthew Robert",
        "Lucas Benjamin",
        "Owen George",
    ];

    const [selectedItem, setSelectedItem] = useState(-1);
    return (
        <div className="overflow-hidden space-y-3">
            {
                React.Children.toArray(
                    names.map((item, index) => {
                        return <ChatListItem
                            onSelect={(idx) => setSelectedItem(idx)}
                            className="cursor-pointer"
                            username={item} index={index}
                            selectedItem={selectedItem} />
                    })
                )
            }
        </div>
    )
}