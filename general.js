/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++                                                                             ++
++         #######                          #####                              ++
++         #        #    #  ######  #####  #     #  ######  #    #             ++
++         #        ##  ##  #       #    # #        #       ##   #             ++
++         #####    # ## #  #####   #    # #  ####  #####   # #  #             ++
++         #        #    #  #       #####  #     #  #       #  # #             ++
++         #        #    #  #       #   #  #     #  #       #   ##             ++
++         #######  #    #  ######  #    #  #####   ######  #    #             ++
++                                                                             ++
++         EmerGen Emergent Behavior modeling                                  ++
++                                                                             ++
**         (c) Copyright 2018, Jonathan D. Lettvin                             ++
**             All rights reserved.                                            **
**                                                                             **
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      #    #    #     #    #     #####   #####  ######    ###   ######  #######
      #   # #   #     #   # #   #     # #     # #     #    #    #     #    #
      #  #   #  #     #  #   #  #       #       #     #    #    #     #    #
      # #     # #     # #     #  #####  #       ######     #    ######     #
#     # #######  #   #  #######       # #       #   #      #    #          #
#     # #     #   # #   #     # #     # #     # #    #     #    #          #
 #####  #     #    #    #     #  #####   #####  #     #   ###   #          #
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 #####  ####### #     # ####### ######     #    #
#     # #       ##    # #       #     #   # #   #
#       #       # #   # #       #     #  #   #  #
#  #### #####   #  #  # #####   ######  #     # #
#     # #       #   # # #       #   #   ####### #
#     # #       #    ## #       #    #  #     # #
 #####  ####### #     # ####### #     # #     # #######
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

"use strict";
// emergent: a mesh of computer simulations for modeling emergent behavior

window.onload = (function (win, doc) {

//------------------------------------------------------------------------------
// PHP and shell style HEREDOC
function HEREDOC (f)
//------------------------------------------------------------------------------
{
	return f.
		toString().
		split('\n').
		slice(1,-1).
		join('\n').
		normalize('NFC');
} // HEREDOC

}) (window, document);