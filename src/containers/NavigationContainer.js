import { connect } from "react-redux";
import { getIsOpen, hideNavigation } from "../redux/modules/navigation";
import Navigation from "../components/Navigation";

const mapStateToProps = state => ({
  isOpen: getIsOpen(state)
});

const mapDispatchToProps = {
  onClose: hideNavigation
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
