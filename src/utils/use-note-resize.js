import { useState, useEffect } from 'react';

export const useNoteResize = () => {
    useEffect(() => {
        const blocksWithNote = document.getElementsByClassName('wp-block-columns has-2-columns')
        for ( let block of blocksWithNote) {
            if (block.querySelector(".content-note")) {
                const textContent = block.querySelector(".content-text")
                const noteContent = block.querySelector(".content-note")

                if (noteContent) {
                    noteContent.parentElement.classList.add('wp-block-column--with-note')
                }

                if (noteContent.clientHeight > textContent.clientHeight) {

                    noteContent.parentElement.style.maxHeight = `${textContent.clientHeight}px`
                    // This is the important part!

                    const collapseSection = (textContent, noteContent) => {
                        // get the height of the element's inner content, regardless of its actual size
                        const textContentHeight = textContent.clientHeight
                        const noteContentHeight = noteContent.clientHeight
                        const noteParent = noteContent.parentElement
                        // temporarily disable all css transitions
                        var elementTransition = noteParent.style.transition;
                        noteParent.style.transition = '';

                        // on the next frame (as soon as the previous style change has taken effect),
                        // explicitly set the element's height to its current pixel height, so we
                        // aren't transitioning out of 'auto'
                        requestAnimationFrame(function() {
                            noteParent.style.maxHeight = noteContentHeight + 'px';
                            noteParent.style.transition = elementTransition;

                            // on the next frame (as soon as the previous style change has taken effect),
                            // have the element transition to height: 0
                            requestAnimationFrame(function() {
                                noteParent.style.maxHeight = textContentHeight + 'px';
                            });
                        });
                    }

                    const expandSection = (textContent, noteContent) => {
                        const noteContentHeight = noteContent.clientHeight
                        const noteParent = noteContent.parentElement

                        // have the element transition to the height of its inner content
                        noteParent.style.maxHeight = noteContentHeight + 'px';
                        noteParent.style.overflow = 'hidden'
                        noteParent.style.zIndex = '1'

                        // when the next css transition finishes (which should be the one we just triggered)
                        noteParent.addEventListener('transitionend', function(e) {
                            // remove this event listener so it only gets triggered once
                            noteParent.removeEventListener('transitionend', noteParent);

                            // remove "height" from the element's inline styles, so it can return to its initial value
                            //noteParent.style.height = '100%';
                        });
                    }

                    ['mouseover','ontouchstart'].forEach( evt =>
                        noteContent.addEventListener("mouseover", event => {
                            expandSection(textContent, noteContent)
                        })
                    );

                    ['mouseout','ontouchend'].forEach( evt =>
                        noteContent.addEventListener("mouseout", event => {
                            collapseSection(textContent, noteContent)
                        })
                    );
                }

            }
        }
    }, [])
}
