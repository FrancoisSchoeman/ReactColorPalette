import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Picker from 'emoji-picker-react';

export default function SavePaletteModal(props) {

    const [isEmojiModalOpen, setIsEmojiModalOpen] = useState(false);
    const [paletteName, setPaletteName] = useState('');
    const [paletteEmoji, setPaletteEmoji] = useState('');

    const refContainer = useRef('form');

    const openEmojiModal = () => {
        props.handleModalClose();
        setIsEmojiModalOpen(true);
    }

    const closeEmojiModal = () => {
        setIsEmojiModalOpen(false);
    }

    const handleSavePalette = () => {
        props.savePalette(paletteName, paletteEmoji)
    }

    return (
        <div>
            {/* Palette Name Modal */}
            <Dialog open={props.isOpen} onClose={props.handleModalClose}>
                <ValidatorForm ref={refContainer} onSubmit={openEmojiModal} onError={errors => console.log(errors)}>
                    <DialogTitle>Enter Palette Name</DialogTitle>
                    <DialogContent>

                        <TextValidator
                            autoFocus
                            name="name"
                            label="Palette Name"
                            variant="standard"
                            validators={["required"]}
                            errorMessages={['This field is required']}
                            value={paletteName}
                            onChange={(evt) => { setPaletteName(evt.target.value) }}
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={props.handleModalClose}>Cancel</Button>
                        <Button type="submit" >Add Name</Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>

            {/* Palette emoji Modal */}
            <Dialog open={isEmojiModalOpen} onClose={props.handleModalClose}>
                <ValidatorForm ref={refContainer} onSubmit={handleSavePalette} onError={errors => console.log(errors)}>

                    <DialogTitle>Choose Emoji</DialogTitle>
                    <DialogContent>

                        <Picker onEmojiClick={(evt, emojiObject) => {
                            setPaletteEmoji(emojiObject.emoji);
                        }} />

                        <TextValidator
                            margin="dense"
                            id="emoji"
                            label="Emoji"
                            type="text"
                            variant="standard"
                            validators={["required"]}
                            errorMessages={['This field is required']}
                            fullWidth
                            value={paletteEmoji}
                            onChange={(evt) => { setPaletteEmoji(evt.target.value) }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeEmojiModal}>Cancel</Button>
                        <Button type="submit">Add Emoji</Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        </div>
    );
}