import React, { useState } from 'react';

// Native components
import { CheckBox } from 'rn-inkpad';

// Styles
import { styles } from './checkBoxStyles';

interface Props {
    item: string;
    selectedItems: string[];
    setSelectedItems: (selectedItems: string[]) => void;
}

const CustomCheckBox: React.FC<Props> = ({
    item,
    selectedItems,
    setSelectedItems,
}) => {
    const [isChecked, setIsChecked] = useState<boolean>(
        selectedItems?.includes(item),
    );

    const handleSelect = (id: string) => {
        const updatedSelectedItems = isChecked
            ? selectedItems.filter((i) => i !== id)
            : [...selectedItems, id];

        setSelectedItems(updatedSelectedItems);
    };

    return (
        <CheckBox
            checked={isChecked}
            iconColor="white"
            onChange={() => handleSelect(item)}
            style={styles.checkBox}
            title={item}
            textStyle={styles.text}
            // checkedColor="#fbde82"
            // uncheckedColor="grey"
        />
    );
};

export default CustomCheckBox;
