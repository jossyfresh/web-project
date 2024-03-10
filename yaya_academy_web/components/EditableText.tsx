import React, { HTMLAttributes } from 'react'
import HtmlParser from './HtmlParser';
import { Button, MantineSize, TextInput } from '@mantine/core';
import { Check, PenSquare } from 'lucide-react';
import { home_data_entry_type } from '@/app/data/dumy';
import { ClassNameValue } from 'tailwind-merge';

type setPlaceholderType = (
	value: React.SetStateAction<home_data_entry_type>
) => void;
type setConditionType = (value: React.SetStateAction<boolean>) => void;

function EditableText({
	condition,
	data,
	placeholder,
	setPlaceholder,
	setCondition,
    textInputSize,
    style
}: {
	condition: boolean;
	data: home_data_entry_type;
	placeholder: home_data_entry_type;
	setPlaceholder: setPlaceholderType;
	setCondition: setConditionType;
        textInputSize?: MantineSize | (string & {}) | undefined;
        style?: string|undefined;
}) {
    return (
					<>
						{condition ? (
							<div>
								<TextInput
									className={style}
									placeholder="Enter some text"
									value={placeholder["en"]}
									size={textInputSize}
									onChange={(change) => {
										setPlaceholder({
											en: change.currentTarget.value,
											html: null,
										});
									}}
								/>
							</div>
						) : (
							<HtmlParser data={data} />
						)}
						{condition ? (
							<Button color="green" onClick={() => setCondition(false)}>
								<Check color="white" size={15} />
							</Button>
						) : (
							<Button color="blue" onClick={() => setCondition(true)}>
								<PenSquare color="white" size={15} />
							</Button>
						)}
					</>
				);
}

export default EditableText